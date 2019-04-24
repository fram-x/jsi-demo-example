using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Jsi.Demo.Library.RNJsiDemoLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNJsiDemoLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNJsiDemoLibraryModule"/>.
        /// </summary>
        internal RNJsiDemoLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNJsiDemoLibrary";
            }
        }
    }
}
