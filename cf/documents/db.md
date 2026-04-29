# DB

## コメント

comments

| 項目名 | 内容 | 型 | 詳細 |
|--------|--------|--------|--------|
| id | ID | INTEGER | Primary |
| author | 送信者 | TEXT |  |
| content | 内容 | TEXT |  |

## ユーザー

users

| 項目名 | 内容 | 型 | 詳細 |
|--------|--------|--------|--------|
| id | ID | INTEGER | Primary |
| email | メールアドレス | TEXT |  |
| name | 名前 | TEXT |  |
| password_hash | パスワード | TEXT |  |
| created_at | 作成日時 | DATETIME, CURRENT_TIMESTAMP |  |
| google_id | Google ID | VARCHAR(255) |  |
| auth_type | 認証タイプ | VARCHAR(50) | `email` (default) \| `google` |

## ユーザーツイート

user_tweets

| 項目名 | 内容 | 型 | 詳細 |
|--------|--------|--------|--------|
| id | ID | INTEGER | Primary |
| user_id | ユーザーID | INTEGER |  |
| content | 内容 | TEXT |  |
| created_at | 作成日時 | DATETIME, CURRENT_TIMESTAMP |  |
| updated_at | 更新日時 | DATETIME, CURRENT_TIMESTAMP |  |
