# React + TypeScript + Vite

```
yarn dev
```

# All albums
```
curl --location -g 'https://api.imgur.com/3/account/Hesundokun/albums' \
--header 'Authorization: Client-ID e2b5a74f5936348' | jq '.data[] | {id: .id, name: .title, bio: .description, }'
```

# Album images
```
curl --location -g 'https://api.imgur.com/3/album/${albumHash}/images' \
--header 'Authorization: Client-ID e2b5a74f5936348' | jq '.data[] | .link' 
```