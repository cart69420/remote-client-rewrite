const Vec3 = require("vec3");

class Vec3Utils {
    static multiply(vec3, multiplier) {
        return new Vec3(vec3.x * multiplier, vec3.y * multiplier, vec3.z * multiplier);
    }
    static power(vec3, power) {
        return new Vec3(Math.pow(vec3.x, power), Math.pow(vec3.y, power), Math.pow(vec3.z, power));
    }
    static root(vec3, root) {
        return new Vec3(Math.pow(vec3.x, 1 / root), Math.pow(vec3.y, 1 / root), Math.pow(vec3.z, 1 / root));
    }
}

module.exports = Vec3Utils;