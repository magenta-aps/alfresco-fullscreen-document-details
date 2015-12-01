Fullscreen Document Details Alfresco Share AMP module
=====================================================

If you pass the query string parameter `fullscreen=1` to the document details
page, it will automatically open the PdfJs previewer in fullscreen mode when the
page loads. This is mostly useful when linking to the document details page from
another website.

To build, run `mvn package`. Copy the .amp file from the target/ directory to
your Alfresco Share installation and run `apply_amps.sh`.
