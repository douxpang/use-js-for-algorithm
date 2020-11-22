const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function myPromise(executor) {
    let self = this

    self.state = PENDING
    self.value = null
    self.reason = null
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []
    function resolve(value) {
        if(self.state === PENDING) {
            self.state = FULFILLED
            self.value = value
        }

        self.onFulfilledCallbacks.forEach(function(fulfilledCallback) {
            fulfilledCallback();
        });

    }
    
    function reject(reason) {
        if(self.state === PENDING) {
            self.state = REJECTED
            self.reason = reason

            self.onRejectedCallbacks.forEach(function(rejectedCallback) {
                rejectedCallback();
            });
        }
    }
    try {
        executor(resolve,reject)
    }catch(reason) {
        reject(reason)
    }
}

myPromise.prototype.then = function(onFulfilled,onRejected) {
    let _this = this
    if(_this.state === PENDING) {
        self.onFulfilledCallbacks.push(() => {
            onFulfilled(self.value)
        })
        self.onRejectedCallbacks.push(() => {
            onRejected(self.reason);
        });
    }
    if(_this.state === FULFILLED) {
        onFulfilled(_this.value)
    }
    if(_this.state === REJECTED) {
        onRejected(_this.value)
    }
}