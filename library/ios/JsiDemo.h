#pragma once

#include <jsi/jsi.h>

class JsiDemo {
private:
    friend class JsiDemoHostObjectBinding;
public:
    double performAddition(double a, double b) const;
};

