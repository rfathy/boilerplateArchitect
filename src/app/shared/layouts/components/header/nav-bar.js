export default {
    name: "nav-bar",
    data() {
      return {
        isVisible: false
      }
    },
    methods: {
      toggleMenu() {
        this.isVisible = !this.isVisible;
      },
      toggleItem () {
        let menuItemContainer = document.querySelector('.manu-item-container');
        if (menuItemContainer.classList.contains('hide')) {
          menuItemContainer.classList.remove('hide');
        } else {
          menuItemContainer.classList.add('hide');
        }
      }
    }
};