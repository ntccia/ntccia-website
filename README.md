# 新北市化粧品商業同業公會網站

這是一份可直接放到 GitHub Pages 的靜態網站檔案。

## 上傳方式

1. 在 GitHub 建立新的 Repository，建議名稱：`ntccia-website`。
2. 將本資料夾內所有檔案上傳到 Repository 根目錄。
3. 到 Repository 的 `Settings > Pages`。
4. Source 選擇 `Deploy from a branch`。
5. Branch 選擇 `main`，Folder 選擇 `/root`，按 Save。
6. Custom domain 填入：`ntccia.org.tw`。

## DNS 設定

主網域 `ntccia.org.tw` 設定 4 筆 A Record：

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

`www` 子網域設定 CNAME，指向你的 GitHub username：

- `www` -> `你的GitHub帳號.github.io`

注意：GitHub 帳號名稱不是 email。請登入 GitHub 後在右上角頭像查看 username。

## 需要後續補齊的內容

- 歷任理監事完整名單
- 會員廠商名錄
- 最新消息正式資料
- 入會申請需檢附文件清單
