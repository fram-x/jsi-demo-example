
#import "RNJsiDemoLibrary.h"

@implementation RNJsiDemoLibrary

RCT_EXPORT_MODULE(RNJsiDemoLibrary);

RCT_EXPORT_METHOD(performAddition:(nonnull NSNumber *)a b:(nonnull NSNumber*)b callback:(RCTResponseSenderBlock)callback) {
    NSNumber *sum = [NSNumber numberWithFloat:([a floatValue] + [b floatValue])];
    callback(@[sum]);
}


@end
  
