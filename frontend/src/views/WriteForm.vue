<template>
    <div>
        <h2>글을 작성하는 곳입니다.</h2>
        <input type="text" v-model="title"><br>
        <textarea cols="30" rows="10" v-model="memo"></textarea><br>
        <button @click="addmemo">제출</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            title : '',
            memo : '',
            writer : this.$store.state.user
        }
    },
    methods : {
        addmemo() {
            this.$store.dispatch('addMemo',{
                data : {
                    title : this.title,
                    memo : this.memo,
                    writer : this.writer
                }
            }).then((response) => {
                console.log(response.data);
            });
            this.$router.push('/list');
        }
    }
}
</script>