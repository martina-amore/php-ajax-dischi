const app = new Vue ({
    el: "#root",
    data: {
        disks: [],
    },
    mounted(){
        axios
        .get("http://localhost/php-ajax-dischi/Modo-2/server.php")
        .then(answer => {
            this.disks = answer.data.response;
        })
    }
})
