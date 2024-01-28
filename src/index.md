---
titleTemplate: :title
---

<script setup>
import { data as posts } from "../.vitepress/theme/components/posts.data.mjs"
import NewPosts from "../.vitepress/theme/components/NewPosts.vue"
</script>

![トップ画像](./public/site-image.webp)

`hekireki`はシンプルかつ軽快に動作する`VitePressカスタムテーマ`です。

インストールは[こちら](https://github.com/handism/hekireki)を参照ください。


## 新着記事

<NewPosts :posts="posts" />