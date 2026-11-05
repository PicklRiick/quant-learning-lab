# 量化研习室 · Quant Learning Lab

中文量化学习网站：十次课程、六份速查、课程总纲、NotebookLM 阅读包与研究资料。

## 使用

直接打开 `index.html`，或运行 `python3 -m http.server 8000` 后访问本地服务。

- 搜索课程、分类筛选、仅看未完成。
- 每课底部标记完成，首页显示进度与继续学习。
- 课程策略卡本机自动保存，并可导出 JSON。
- 无需账号、外部字体、CDN 或服务端数据库。

进度与草稿只存于浏览器 localStorage；没有跨设备同步。

## GitHub Pages

网站通过 GitHub Pages 从 `main` 分支根目录直接发布。`.nojekyll` 保证静态 HTML、CSS 和 JavaScript 原样提供。更新并推送到 main 后会触发重新发布。

站点内容是 HTML/CSS/JS，可直接用于 GitHub Pages 的仓库子路径。不要改成以 `/assets` 开头的绝对资源路径。

## 更新资料

修改 Markdown 后重新生成阅读页：

```sh
python3 -m pip install -r requirements.txt
python3 scripts/build-docs.py
python3 scripts/check-site.py
```

课程在 `lessons/`，参考资料在 `reference/`，首页课程元数据在 `assets/catalog.js`。首页为静态 HTML，修改课程标题和链接时需同步调整 `index.html`。

## 验证

已经检查整站内部文件和锚点链接、JavaScript 语法，并在 Chrome 的桌面与手机视口测试搜索、筛选、测验、草稿恢复、进度和撤销。外部来源未逐一验证实时可用性。

本仓库只包含课程与网站资料，不包含个人使命、私人笔记或学习历史记录。
