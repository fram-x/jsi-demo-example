#include "JsiDemoHostObjectBinding.h"

#include "JsiDemo.h"
#include <jsi/JSIDynamic.h>

void JsiHostObjectBinding::install(
                          facebook::jsi::Runtime &runtime,
                          std::shared_ptr<JsiHostObjectBinding> binding) {
    auto testModuleName = "RNJsiDemoLibrary";
    auto object = facebook::jsi::Object::createFromHostObject(runtime, binding);
    runtime.global().setProperty(runtime, testModuleName, std::move(object));
}

JsiHostObjectBinding::JsiHostObjectBinding(std::unique_ptr<JsiDemo> demo)
: demo_(std::move(demo)) {}

facebook::jsi::Value JsiHostObjectBinding::get(
                            facebook::jsi::Runtime &runtime,
                            const facebook::jsi::PropNameID &name) {
    auto methodName = name.utf8(runtime);
    auto &demo = *demo_;
    
    if (methodName == "performAddition") {
        return facebook::jsi::Function::createFromHostFunction(runtime, name, 2, [&demo](
                                                                               facebook::jsi::Runtime &runtime,
                                                                               const facebook::jsi::Value &thisValue,
                                                                               const facebook::jsi::Value *arguments,
                                                                               size_t count) -> facebook::jsi::Value {
            auto arg1 = &arguments[0];
            auto arg2 = &arguments[1];
            return demo.performAddition(arg1->asNumber(), arg2->asNumber());
        });
    }
    
    return facebook::jsi::Value::undefined();
}
