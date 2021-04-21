window.onload = () => {
    let campo = document.getElementById('audiencia');
    let token = 'EAAnq1volmPUBAGW8O6BrCXhjdQe7YDA2RF1D861e4R4bFo2PdJabOZCgBgJ4QLwDQUoR9jM6dHL95YSCip0be32xMRuWSlAQwLdtl50ZCSp5MIykTXMYjVKdJKb3WuD0Q14J9wUFu8rUqZAyZCnSQrtPGbTJvWpRVPe1NdXX0ra6JpOeDFkB59iWsnUhdxGWqniDxxCVMV4ZAdqotR5q6rGroM2yjuivsFZCMm1wPK9gZDZD';
    document.getElementById('btn').addEventListener('click', (e) => {
        let termo = campo.value;
        let url = `https://graph.facebook.com/search?type=adinterest&q=[${termo}]&limit=10000&locale=pr_BR&access_token=${token}`;

        fetch(url).then(function(response) {
            console.log(response);
        });
        // fetch(url)
        //     .then((e) => e)
        //     .then((res) => {
        //     console.log(res);
        // });
    });

};