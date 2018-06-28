function Area(data){
    this.isCalledWith=data;
}

function Donut(data){
    this.isCalledWith=data;
}

let Morris={Area, Donut};

module.exports=Morris