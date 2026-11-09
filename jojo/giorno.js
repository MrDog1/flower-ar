// Cleans up the Sketchfab "Giorno Giovanna & gold experience" GLB for display.
// - hides the black backdrop cube
// - re-poses the skeleton (node pose != bind pose in the source file, which scrambled the mesh)
// - resets Giorno to bind pose (T-pose) and lowers the arms
// Gold Experience (Object_170) is left untouched.
AFRAME.registerComponent("giorno-fix", {
  init() {
    // Wait a few frames after load so every parent world matrix is current before re-posing.
    this.el.addEventListener("model-loaded", () => setTimeout(() => this.fix(), 300));
  },
  fix() {
    {
      const root = this.el.getObject3D("mesh");
      if (!root) return;
      // skeleton.pose() derives local transforms from parent world matrices, which must be current
      this.el.object3D.updateMatrixWorld(true);
      root.traverse((n) => {
        if (n.name === "Cube004_Material003_0") n.visible = false;
        if (n.isSkinnedMesh && n.name === "Object_86") {
          n.frustumCulled = false; // bounding volume was computed for the unfixed 100x pose
          const sk = n.skeleton;
          const armature = sk.bones[0].parent.parent; // _rootJoint -> Object_5 -> Armature
          armature.scale.set(1, 1, 1);
          armature.updateMatrixWorld(true);
          sk.pose();
          const arm = (re, z) => {
            const b = sk.bones.find((x) => re.test(x.name));
            if (b) b.rotateZ(z);
          };
          arm(/LeftArm_/, -1.2);
          arm(/RightArm_/, 1.2);
          // pose() was done with the original scale of 1 above; restore the 100 the
          // inverse-bind matrices were authored for so the final size is correct.
          armature.scale.set(100, 100, 100);
          armature.updateMatrixWorld(true);
        }
      });
    }
  },
});
