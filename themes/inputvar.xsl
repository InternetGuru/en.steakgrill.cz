<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="fieldset">
    <xsl:apply-templates/>
  </xsl:template>
  
  <xsl:template match="legend">
    <h2>
      <xsl:copy-of select="text()"/>
    </h2>
  </xsl:template>
  
  <xsl:template match="form[contains(@id, 'inputvarform')]">
    <div class="section">
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>