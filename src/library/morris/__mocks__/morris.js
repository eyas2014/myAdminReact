function Area(data){
    this.isCalledWith=data;
}

function Donut(data){
    this.isCalledWith=data;
}

function Line(data){
    this.isCalledWith=data;
}

let Morris={Area, Donut, Line};

module.exports=Morris