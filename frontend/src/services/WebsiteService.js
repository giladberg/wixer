import HttpService from './HttpService';
import UtilsService from './UtilsService.js'




function add() {
   // const addedReview  = await HttpService.post(`review`, review);
    return Promise.resolve(_createWebsite())
  }

  function _createWebsite(){
      return{
          '_id':UtilsService.makeRandomId(),
          createtBy:{},
          createdAt:new Date(),
          title:'Bachelor Party',
          bodyCmp:{
            style:{}
          },
          cmps:[{
            cmpName:'title',
            style:{}
          },
          {
            cmpName:'imageCarousel',
            style:{}
          }]
      }
  }



export default {
    add
};