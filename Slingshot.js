class Slingshot {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);   
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
            var point1=this.sling.bodyA.position
            var point2=this.sling.pointB
            strokeWeight(6);
            line(point1.x,point1.y,point2.x,point2.y) 
        }
        
        
    }
}