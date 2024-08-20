"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function greett(varr, varrr) {
    console.log(varr);
    console.log(varrr);
}
greett(4, 4);
greett(4, "sanjay");
function maybe(fnOrP) {
    if (typeof fnOrP === "function") {
        try {
            return fnOrP();
        }
        catch (_a) {
            return undefined;
        }
    }
    return fnOrP.catch(() => undefined);
}
const x = maybe(() => "hello");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const y = yield maybe(Promise.resolve("typescript"));
    });
});
