#!/usr/bin/env python3
"""Render existing course Markdown as portable, dependency-free browser pages.

Install build dependency: python -m pip install -r requirements.txt
Then run: python scripts/build-docs.py
"""
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit
import argparse
import html
import re
import sys

try:
    import markdown
except ImportError:
    sys.exit('Missing Markdown 3.7. Install with: python -m pip install -r requirements.txt')

ROOT = Path(__file__).resolve().parents[1]
DISPLAY_TITLES = {
    'MISSION': '学习目标',
    'NOTES': '学习笔记',
    'CURRICULUM': '十课学习总纲',
    'NOTEBOOKLM_READING_PACKS': 'NotebookLM 阅读包',
    'RESOURCES': '量化学习资源',
}

def local_url(value, source):
    """Fix local Markdown extensions without touching external URLs."""
    u = urlsplit(html.unescape(value))
    if u.scheme or u.netloc or not u.path:
        return value
    p = u.path
    if p.endswith('.md'):
        p = p[:-3] + '.html'
    # Course notes sometimes name paths from the workspace root. Resolve only
    # existing files; preserve anchors, queries, and URLs the source intended.
    raw = u.path
    if not (source.parent / raw).exists() and (ROOT / raw).exists():
        p = ('../' * len(source.relative_to(ROOT).parts[:-1])) + p
    return html.escape(urlunsplit(('', '', p, u.query, u.fragment)), quote=True)

def render(source):
    text = source.read_text(encoding='utf-8')
    parser = markdown.Markdown(extensions=['extra', 'toc', 'sane_lists'], extension_configs={
        'toc': {'title': '本页目录', 'toc_depth': '2-3', 'permalink': False},
    })
    body = parser.convert(text)
    body = re.sub(r'href="([^"]+)"', lambda m: 'href="' + local_url(m.group(1), source) + '"', body)
    # Convert standalone source-path snippets in reading packs into usable links.
    def code_link(m):
        p = html.unescape(m.group(1))
        if '<' in p or '\n' in p or not re.fullmatch(r'[\w./-]+\.(?:md|html)', p):
            return m.group(0)
        if not (source.parent / p).is_file() and not (ROOT / p).is_file():
            return m.group(0)
        return '<a class="file-link" href="' + local_url(p, source) + '">' + m.group(0) + '</a>'
    body = re.sub(r'<code>([^<]+)</code>', code_link, body)
    first_h1 = re.search(r'<h1[^>]*>(.*?)</h1>', body, re.S)
    title = DISPLAY_TITLES.get(source.stem) or (re.sub('<[^>]+>', '', first_h1.group(1)) if first_h1 else source.stem)
    depth = len(source.relative_to(ROOT).parts) - 1
    prefix = '../' * depth
    category = '课程资料' if depth == 0 else ('研究笔记' if source.parent.name == 'research' else '学习记录')
    toc = parser.toc if parser.toc_tokens else ''
    if not toc or '<li>' not in toc:
        toc = '<p class="toc-empty">此页内容可直接阅读。</p>'
    return f'''<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="量化学习平台 · {html.escape(title, quote=True)}">
<title>{html.escape(title)} · 量化学习</title>
<link rel="stylesheet" href="{prefix}assets/docs.css">
</head>
<body>
<a class="skip" href="#document">跳至正文</a>
<header class="site-bar"><a class="brand" href="{prefix}index.html"><span class="brand-mark" aria-hidden="true">Q</span>量化学习<span class="brand-en">QUANT LEARNING</span></a><a class="back" href="{prefix}index.html">← 返回学习平台</a></header>
<div class="doc-layout">
<aside class="doc-sidebar" aria-label="文档导航"><div class="doc-label">{category}</div><nav aria-label="本页目录">{toc}</nav><div class="related"><a href="{prefix}CURRICULUM.html">十课学习总纲 ↗</a><a href="{prefix}NOTEBOOKLM_READING_PACKS.html">NotebookLM 阅读包 ↗</a><a href="{prefix}RESOURCES.html">资源清单 ↗</a></div></aside>
<main id="document" class="doc-content" tabindex="-1"><p class="breadcrumb"><a href="{prefix}index.html">学习平台</a><span>/</span>{category}</p>{body}<footer class="doc-footer">量化学习 · 从可检验的假设开始。<a href="#document">回到顶部 ↑</a></footer></main>
</div>
</body>
</html>
'''

def main():
    count = 0
    for source in sorted(ROOT.rglob('*.md')):
        if source.name == 'README.md' or any(p.startswith('.') for p in source.relative_to(ROOT).parts):
            continue
        if 'scripts' in source.relative_to(ROOT).parts:
            continue
        source.with_suffix('.html').write_text(render(source), encoding='utf-8')
        count += 1
    print(f'Rendered {count} Markdown documents')

if __name__ == '__main__':
    main()
