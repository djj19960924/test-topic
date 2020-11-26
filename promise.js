const { log } = require("async")

class Promise {
	constructor(executor) {
		this.state = 'pending'
		this.value = undefined
		this.reason = undefined
		//成功的
		this.onResolvedCallbacks = []
		//失败的
		this.onRejectedCallbacks = []
		const resolve = (value) => {
			if(this.state==='pending') {
				this.state = 'fulfilled'
				this.value = value
				this.onResolvedCallbacks.forEach(fn=>fn())
			}
		}
		const reject = (reason) => {
			if(this.state==='pengding') {
				this.state = 'rejected'
				this.reason = reason
				this.onRejectedCallbacks.forEach(fn=>fn())
			}
		}
		executor(resolve,reject)
	}
	then(onFilfilled,onRejected) {
		if(this.state === 'fulfilled') {
			onFilfilled(this.value)
		}
		if(this.state === 'rejected') {
			onRejected(this.reason)
		}
		if(this.state === 'pending') {
			this.onResolvedCallbacks.push(()=>{
				onFilfilled(this.value)
			})
			this.onRejectedCallbacks.push(()=>{
				onFilfilled(this.reason)
			})
		}
	}
}
const promise = new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove(100)
	},1000)
})
promise.then(res=>{
	console.log(res)
})
