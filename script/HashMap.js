	var HashMap = function(){
        if(null == this.keyArr){
            this.keyArr = new Array();
        }
        if(null == this.valArr){
            this.valObj = new Object;
        }
        this.ifExistKey = function(key){
            if(key==null) return false;
            if(this.keyArr.indexOf(key)>=0){
                return true;
            }else{
                return false;
            }
        }

        this.getKeyArr = function(){
            return this.keyArr;
        }
        //根据key获得valArr
        this.getValArr = function(key){
            return this.valObj[key];
        }
        //增加键值对
        this.addKeyVal = function(key,val){
            if(!this.ifExistKey(key)){
                this.keyArr.push(key); 
            }
            if(null == this.valObj[key]){
                this.valObj[key] = new Array();
            }
            this.getValArr(key).push(val);
        }
        //移除key和所有key对应的valArr中的内容
        this.removeKey = function(key){
            if(this.keyArr.indexOf(key)>=0){
                this.keyArr.splice(this.keyArr.indexOf(key), 1);
                if(Array.isArray(this.valObj[key])){
                    this.valObj[key].splice(0, this.valObj[key].length);
                }
            } 
        }
        this.removeValOfKey = function(key,val){
            if(this.ifExistKey(key)){
                if(this.valObj[key].indexOf(val)>=0){
                    this.valObj[key].splice(this.valObj[key].indexOf(val),1);
                }
            }
        }
    }