//依赖HashMap.js
var EventController = function(){
		this.eventHM = new HashMap();
		this.regEvent = function(evtName,instance,handler){
			if(!this.eventHM.ifExistKey(evtName)){
				var hm = new HashMap();
				this.eventHM.addKeyVal(evtName,hm);
			}
			if(!this.eventHM.getValArr(evtName)[0].ifExistKey(instance)){
				this.eventHM.getValArr(evtName)[0].addKeyVal(instance,handler);
				instance.addEventListener(evtName, handler);
			}else{
				if(this.eventHM.getValArr(evtName)[0].getValArr(instance).indexOf(handler)>=0){
					console.log('实例已经存在并且函数也已经存在，不添加');
				}else{
					this.eventHM.getValArr(evtName)[0].addKeyVal(instance,handler);
					instance.addEventListener(evtName, handler);
				}
			}
		}
		//不会冒泡
		this.dispatchEvent = function(evtName,dataObj){
			if(this.eventHM.ifExistKey(evtName)){
				var cusEvt = new CustomEvent(evtName,{'detail':dataObj});
				var componentArr = this.eventHM.getValArr(evtName)[0].getKeyArr();
				for(var i=0; i<componentArr.length;i++){
					componentArr[i].dispatchEvent(cusEvt);
				}
			}
		}
	}