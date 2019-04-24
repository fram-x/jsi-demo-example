#pragma once

#include "JsiDemo.h"
#include <jsi/jsi.h>

/*
 * Exposes Test to JavaScript realm.
 */
class JsiHostObjectBinding : public facebook::jsi::HostObject {
public:
    /*
     * Installs TestBinding into JavaSctipt runtime.
     * Thread synchronization must be enforced externally.
     */
    static void install(
                        facebook::jsi::Runtime &runtime,
                        std::shared_ptr<JsiHostObjectBinding> binding);
    
    JsiHostObjectBinding(std::unique_ptr<JsiDemo> demo);
    
    /*
     * `jsi::HostObject` specific overloads.
     */
    facebook::jsi::Value get(facebook::jsi::Runtime &runtime, const facebook::jsi::PropNameID &name) override;
    
private:
    std::unique_ptr<JsiDemo> demo_;
};
