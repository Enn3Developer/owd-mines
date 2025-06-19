export default {
  id: 'com.enn3developer.owd_mines',
  title: 'N Mines',
  singleton: true,
  icon: 'meteor-icons:robot',
  windows: {
    main: {
      component: () => import('./components/Window/WindowTemplate.vue'),
      resizable: true,
      size: {
        width: 640,
        height: 480,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    mines: {
      command: 'mines',
    },
  },
  commands: {
    mines: (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
