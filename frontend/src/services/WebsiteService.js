// import HttpService from './HttpService';
import UtilsService from './UtilsService.js'




function add() {
  // const addedReview  = await HttpService.post(`review`, review);
  return Promise.resolve(_createWebsite())
}




function _createWebsite() {
  return {
    '_id': UtilsService.makeRandomId(),
    createtBy: {},
    createdAt: new Date(),
    title: 'Bachelor Party',
    bodyCmp: {
      style: {
        bgImgUrl: 'http://2.bp.blogspot.com/-8vFNyvVrAOk/UvOE4F-KK8I/AAAAAAAABkw/vS1A48o5RRU/s1600/very+beautiful+hd+wallpapers_1.jpg',
        bgSize: 'cover'
      }
    },
    cmps: [{
      cmpName: 'title',
      style: {}
<<<<<<< HEAD
    }
    // },
    // {
    //   cmpName: 'paragraph',
    //   style: {}
    // },
    // {
    //   cmpName: 'imageGrid',
    //   style: {}
    // },
    // {
    //   cmpName: 'introduction',
    //   style: {}
    // },
    // {
    //   cmpName: 'imageCarousel',
    //   style: {}
    // },
    // {
    //   cmpName: 'calendar',
    //   style: {}
    // },
    // {
    //   cmpName: 'locationMap',
    //   style: {}
    // },
    // {
    //   cmpName: 'countdown',
    //   style: {}
    // },
=======
    },
    {
      cmpName: 'paragraph',
      style: {}
    },
    {
      cmpName: 'imageGrid',
      style: {}
    },
    {
      cmpName: 'introduction',
      style: {}
    },
    {
      cmpName: 'locationMap',
      style: {}
    },
    {
      cmpName: 'countdown',
      style: {}
    },
>>>>>>> development
    ]
  }
}



export default {
  add
};



<<<<<<< HEAD

// style: {position:'absolute',top:'50%',left:'50%'},
// id:UtilsService.makeRandomId()
// },
// {
// cmpName: 'title',
// style: {position:'absolute',top:'70%',left:'80%'},
// id:UtilsService.makeRandomId()
=======
// {
//   cmpName: 'title',
//   style: {position:'absolute',top:'70%',left:'80%'},
//   id:UtilsService.makeRandomId()
>>>>>>> development
// }