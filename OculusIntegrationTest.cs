using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor.PackageManager;

public class OculusIntegrationTest
{

    [Test]
    public void OVRInputIsPresent()
    {
        // Test that the Oculus Camera Rig is not null
        Assert.IsNotNull(typeof(OVRInput), "Oculus Input SDK is not present in the project");
    }

    [Test]
    public void OVRManagerIsPresent()
    {
        // Check if the OVRManager class is present
        Assert.IsNotNull(typeof(OVRManager), "Oculus Integration SDK is not present in the project");
    }
}
