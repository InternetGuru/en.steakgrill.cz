<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="fieldset">
    <div class="part">
      <xsl:apply-templates/>
    </div>
  </xsl:template>
  
  <xsl:template match="legend">
    <xsl:element name="h2">
      <xsl:attribute name="class">hideable hideable-nohide</xsl:attribute>
<!--       <xsl:attribute name="id"><xsl:copy-of select="generate-id()"/></xsl:attribute> -->
      <xsl:copy-of select="text()"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="form[contains(@id, 'inputvarform')]">
    <div class="section">
      <xsl:copy>
        <xsl:apply-templates select="node()|@*" />
      </xsl:copy>
    </div>
  </xsl:template>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
