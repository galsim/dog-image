<template lang="pug">
    .header
        .container
            router-link.title(to="/")
            router-link(to="/favorite") Избранные пёсели
</template>

<style lang="scss">
    .header {
        background: #151419;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100px;
        }
        .title {
            width: 120px;
            height: 30px;
            background: url('~@/assets/img/dog-title.png') no-repeat center;
            background-size: contain;
        }
    }
</style>
