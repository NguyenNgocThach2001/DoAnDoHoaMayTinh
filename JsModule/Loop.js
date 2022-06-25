const radiansPerSecond = THREE.MathUtils.degToRad(720);

THREE.Object3D.prototype.rotateAroundWorldAxis = function() {
    var q = new THREE.Quaternion();

    return function rotateAroundWorldAxis( point, axis, angle ) {

        q.setFromAxisAngle( axis, angle );

        this.applyQuaternion( q );

        this.position.sub( point );
        this.position.applyQuaternion( q );
        this.position.add( point );

        return this;

    }

}();

const clock = new THREE.Clock();
let sumDelta = 0;
let flip = 1;
let p = 1;
let FLIPP = 1;

class Loop {
    constructor(camera, scene, renderer, controls) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.controls = controls;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
      }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = clock.getDelta();
        sumDelta += delta;
        if(sumDelta > 1){
            sumDelta = 0;
            flip = (flip + 6) % 8;
            FLIPP = - FLIPP;
        }
            // console.log(sumDelta);
            // console.log(flip);
        this.controls.update();
        for (const object of this.updatables) {
            if(object.tick != null)
                object.tick(delta, flip, FLIPP, this.updatables[1]);
        }

        var p = new THREE.Vector3(0, 0, 0);
        let px = Math.random() < 0.5 ? -1 : 1;
        let py = Math.random() < 0.5 ? -1 : 1;
        let pz = Math.random() < 0.5 ? -1 : 1;
        var ax = new THREE.Vector3(0, 1, 0);
        var ay = new THREE.Vector3(1, 0, 0);
        var az = new THREE.Vector3(0, 0, 1);
        // if(FLIPP == 1)
        //     this.camera.rotateAroundWorldAxis(p,ax,1 * delta) ;
        // this.camera.rotateAroundWorldAxis(p,az,1 * delta) ;
        // if(FLIPP == 1)
        //     this.camera.rotateAroundWorldAxis(p,ay,1 * delta) ;
    }
}
export { Loop }


