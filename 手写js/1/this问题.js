var name = "windowsName";
    var b = {
        name:'111'
    }

    var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            },100);
        }

    };

    a.func2()     // this.func1 is not a function

