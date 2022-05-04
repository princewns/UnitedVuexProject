<template>
    <div>
        <h2>{{$store.state.memo.title}}</h2>
        <p>{{$store.state.memo.memo}}</p>
        <hr>
        <ul>
            <li v-for="(comment, i) in $store.state.comments" :key="i">
                <span v-if="comment.writer">{{comment.writer}} : {{comment.comment}}</span>
                <span v-else>익명 : {{comment.comment}}</span>
            </li>
        </ul>
        <hr>
        <input type="text" v-model="comment">
        <button @click="addComment">추가</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            comment : ''
        }
    },
    created() {
        //라우터 파람 안에 있는 memo.id를 전달
        this.$store.dispatch('getMemo', this.$route.params.id);
        this.$store.dispatch('getComment', this.$route.params.id);
    },
    methods : {
        addComment() {
            const comment = {
                memoId : this.$route.params.id,
                writer : this.$store.state.user,
                comment : this.comment
            }
            this.$store.dispatch('postComment', comment);
            //작성창 초기화
            this.comment = ''
        }
    }
}
</script>