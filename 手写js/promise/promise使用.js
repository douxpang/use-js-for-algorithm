//和大家简单复习下promise使用
//假如要获取一个用户数据

function getUser() {
    return fetch('http://www.douxpang.com/user').then(data => {
        resolve(data)
    }).catch(err => {
        reject(err)
    })
}

function getUserByPromise() {
    fetchUser()
        .then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
}

//再用async试一下
async function getUserByAsync() {
    let user = await getUser()
    return user
}
getUserByAsync().then(v => console.log(v))