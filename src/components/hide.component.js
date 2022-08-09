// Credit to Klaus Weidner https://github.com/aframevr/aframe/pull/4356/files 

function registerHideComponent() {

    AFRAME.registerComponent('hide-in-ar-mode', {
        init: function () {
          this.el.sceneEl.addEventListener('enter-vr', (ev) => {
          if (this.el.sceneEl.is('ar-mode')) {
            this.el.setAttribute('visible', false);
          }
          });
          this.el.sceneEl.addEventListener('exit-vr', (ev) => {
          this.el.setAttribute('visible', true);
          });
        }
      })

}

export default registerHideComponent