//发布者提供数据，订阅者接收数据

class Pubsub {
    constructor() {
        this.subscribers = {}
    }

    //订阅事件
    subscribe(event, callback) {
        //如果没有订阅该事件的，就新建一个属性，属性是该事件，对应的值是一个回调的数组
        if (!this.subscribers[event]) {
            this.subscribers[event] = []
        }
        this.subscribers[event].push(callback)
    }
    //发布事件
    publish(event, data) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(callback => callback(data))
        }
    }
    //取消订阅
    unsubscribe(event, callback) {
        if (this.subscribers[event]) {
            this.subscribers[event] = this.subscribers[event].filter(subCallback => subCallback !== callback);
        }
    }
}

const pub = new Pubsub()
//一个事件可以有多个订阅者，这里的订阅者实际就是多个多个回调函数  订阅者通常是一个回调函数
pub.subscribe('e', (data) => { console.log("收到了", data); })
pub.publish('e', "aaaa")

//一个订阅者可以订阅多个事件----意思就是同一个回调函数同时监听多个事件
pub.subscribe('eventA', (data) => { console.log("收到了", data); });
pub.subscribe('eventB', (data) => { console.log("收到了", data); });

pub.publish('eventA', "这是A事件的数据"); // 触发 callback
pub.publish('eventB', "这是B事件的数据"); // 触发 callback