<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="//dl[contains(@class, 'meal')]/dt[1]">
    <xsl:copy>
      <xsl:choose>
        <xsl:when test="parent::dl[@data-type='Main meal']">
          <span class="fas fa-steak">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Starter']">
          <span class="fas fa-croissant">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Soup']">
          <span class="fas fa-soup">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Beer']">
          <span class="fas fa-beer">i</span>
        </xsl:when>
      </xsl:choose>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>