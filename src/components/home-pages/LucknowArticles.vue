<template>
    <div class="lucknow-articles_section">
        <div class="lucknow-articles_wrapper">
            <div class="articles-header">
                <h3>Articles</h3>

                <div class="article-right">
                    <font-awesome-icon :icon="['fas', 'right-long']" size="xs" />
                </div>
            </div>

            <div class="lucknow-articles">
                <div class="article-items" v-for="article in articles" :key="article.id">
                    <div class="article-logo" :class="article.id === 1 ? 'chick-art' : '' ||
                        article.id === 2 ? 'mask-art' : '' ||
                            article.id === 3 ? 'bread-art' : '' ||
                                article.id === 4 ? 'pizza-art' : ''
                    ">
                        <img :src="require('../../assets/images/' + article.artImg)" alt="">
                    </div>

                    <div class="article_details">
                        <p>{{ article.title }}</p>

                        <div class="detail-items">
                            <img :src="require('../../assets/images/' + article.img1)" alt="" class="img">

                            <img :src="require('../../assets/images/' + article.img2)" alt="" class="img">

                            <div class="likes">
                                <img src="../../assets/images/like.svg" alt="">
                                <span>{{ article.likes }}+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lucknow-articles',
    data() {
        return {
            articles: [
                {
                    id: 1,
                    artImg: 'chicken.svg',
                    title: 'How to cook turkey on Natural Gas ',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 2.svg',
                    likes: 28
                },
                {
                    id: 2,
                    artImg: 'mask.svg',
                    title: 'Corona virus update: 3,43,287+ cases',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                },
                {
                    id: 3,
                    artImg: 'bread.svg',
                    title: 'Tasty chunk donutes with chocolate',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                },
                {
                    id: 4,
                    artImg: 'pizza.svg',
                    title: 'Home made double cheez with popcorn respies',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                }
            ]
        }
    }
}
</script>