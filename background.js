// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.executeScript(null,{code: "var radios =  document.querySelectorAll('.appsMaterialWizToggleRadiogroupOnRadio')" });
chrome.tabs.executeScript(null, {code: "radios.forEach(item => item.click())"});
