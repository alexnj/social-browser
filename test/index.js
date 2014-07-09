var chai = require("chai"),
    expect = chai.expect,
    socialbrowser = require("../index"),
    detect = socialbrowser.detect;

describe("#detect", function() {
    it("detects facebook browser", function() {
        var browser = detect({
            "headers": {
                "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/12.1.0.24.20;FBBV/3214247;FBDV/iPhone5,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/AT&T;FBID/phone;FBLC/en_US;FBOP/5]"
            }
        });

        expect(browser).to.have.property("major").and.is.equal.to("facebook");
    });
});
