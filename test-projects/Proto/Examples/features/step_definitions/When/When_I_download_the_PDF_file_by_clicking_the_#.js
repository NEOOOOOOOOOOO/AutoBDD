module.exports = function() {
  this.When(/^I download the PDF file by clicking the "([^"]*)"$/, {timeout: process.env.StepTimeoutInMS}, function (imageName) {
    // delete previous download file
    var downloadUrl = browser.getUrl();
    var fileName = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1, downloadUrl.lastIndexOf('.'));
    var fileExt = downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1);
    console.log(fileName);
    console.log(fileExt);
    this.fs_session.deleteDownloadFile(fileName, fileExt);

    // click PDF download icon
    var imageFullPath = this.fs_session.getLocalThenGlobalImageFullPath(__dirname, imageName);
    var imageSimilarity = 0.8;
    console.log(imageFullPath);
    this.screen_session.moveMouse(0, 0);
    this.screen_session.moveMouse(100, 100);
    var resultString = this.screen_session.focusedFindImage(imageFullPath, imageSimilarity, 'single');
    expect(resultString).not.toContain('not found');
    expect(resultString).not.toContain('error');
    var resultArray = JSON.parse(resultString);
    // click LinuxSave_button
    var saveButtonFullPath = this.fs_session.getLocalThenGlobalImageFullPath(__dirname, 'LinuxSave_button');
    var imageSimilarity = 0.8;
    var resultString = this.screen_session.focusedFindImage(saveButtonFullPath, imageSimilarity, 'single');
    expect(resultString).not.toContain('not found');
    expect(resultString).not.toContain('error');
    var resultArray = JSON.parse(resultString);
    browser.pause(5000);
  });
};
