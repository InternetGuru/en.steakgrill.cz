<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="//*[contains(@class, 'tocable')]">
    <xsl:variable name="name" select="name()"/>
    <xsl:variable name="class" select="@data-item-class"/>
    <xsl:for-each select="//h2">
      <xsl:element name="{$name}">
        <a href="#{@id}" class="{$class}"><xsl:copy-of select="text()"/></a>
      </xsl:element>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>