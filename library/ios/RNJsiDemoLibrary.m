
#import "RNJsiDemoLibrary.h"
#import "JsiDemoHostObjectBinding.h"
#import <React/RCTBridge+Private.h>

@implementation RNJsiDemoLibrary

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(performAddition:(nonnull NSNumber *)a b:(nonnull NSNumber*)b callback:(RCTResponseSenderBlock)callback) {
    NSNumber *sum = [NSNumber numberWithFloat:([a floatValue] + [b floatValue])];
    callback(@[sum]);
}

RCT_EXPORT_METHOD(initialize) {
    NSLog(@"Initialized");
}

- (void)setBridge:(RCTBridge *)bridge
{
    [super setBridge:bridge];
    RCTCxxBridge *cxxBridge = (RCTCxxBridge *)bridge;
    if(cxxBridge.runtime == NULL) return;
    
    facebook::jsi::Runtime &runtime = *(facebook::jsi::Runtime *)cxxBridge.runtime;
    auto demo = std::make_unique<JsiDemo>();
    std::shared_ptr<JsiHostObjectBinding> demoBinding = std::make_shared<JsiHostObjectBinding>(std::move(demo));
    JsiHostObjectBinding::install(runtime, demoBinding);
}

- (NSArray<NSString *> *)supportedEvents {
    return @[];
}

@end
  
