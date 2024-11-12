<template>
  <div>
    <div class="footer">111111</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      ruleForm: {},
      user: {},
      heads: {},
    };
  },
  created() {
    // this.setHeaderStyle()
  },
  mounted() {
    let sessionTable = this.$storage.get("sessionTable")
    this.$http({
      url: sessionTable + '/session',
      method: "get"
    }).then(({
               data
             }) => {
      if (data && data.code === 0) {
        this.user = data.data;
      } else {
        let message = this.$message
        message.error(data.msg);
      }
    });
  },
  methods: {
    onLogout() {
      let storage = this.$storage
      let router = this.$router
      storage.remove("Token");
      router.replace({
        name: "login"
      });
    },
    onIndexTap(){
      window.location.href = `${this.$base.indexUrl}`
    },
    setHeaderStyle() {
      this.$nextTick(()=>{
        document.querySelectorAll('.navbar .right-menu .logout').forEach(el=>{
          el.addEventListener("mouseenter", e => {
            e.stopPropagation()
            el.style.backgroundColor = this.heads.headLogoutFontHoverBgColor
            el.style.color = this.heads.headLogoutFontHoverColor
          })
          el.addEventListener("mouseleave", e => {
            e.stopPropagation()
            el.style.backgroundColor = "transparent"
            el.style.color = this.heads.headLogoutFontColor
          })
        })
      })
    },
  }
};
</script>


<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1; /* 可根据需要修改 */
  padding: 10px;
  text-align: center;
}

.navbar {
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding: 0 34px;
  box-sizing: border-box;
  background-color: #ff00ff;
  position: relative;
  z-index: 111;

  .right-menu {
    position: absolute;
    right: 34px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 111;

    .user-info {
      font-size: 16px;
      color: red;
      padding: 0 12px;
    }

    .logout {
      font-size: 16px;
      color: red;
      padding: 0 12px;
      cursor: pointer;
    }

  }

  .title-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    .title-img {
      width: 44px;
      height: 44px;
      border-radius: 22px;
      box-shadow: 0 1px 6px #444;
      margin-right: 16px;
    }


  }
}
</style>
