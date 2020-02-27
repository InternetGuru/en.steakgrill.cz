<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:param name="inputvar-hlavicka-akce" select="''"/>
  
  <xsl:template match="//p[preceding-sibling::h1[1][contains(@id, 'steakgrill')]]">
    <xsl:copy-of select="."/>
    <xsl:if test="$inputvar-hlavicka-akce">
      <xsl:value-of disable-output-escaping="yes" select="$inputvar-hlavicka-akce"/>
   </xsl:if>
  </xsl:template>
  
  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>