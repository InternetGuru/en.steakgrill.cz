<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="//dl[contains(@class, 'meal')]/dt[1]">
    <xsl:copy>
      <xsl:choose>
        <xsl:when test="parent::dl[@data-type='Main meal']">
          <span class="fal fa-steak">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Starter']">
          <span class="fal fa-bacon">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Soup']">
          <span class="fal fa-soup">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Dessert']">
          <span class="fal fa-ice-cream">i</span>
        </xsl:when>
        <xsl:when test="parent::dl[@data-type='Pastry']">
          <span class="fal fa-croissant">i</span>
        </xsl:when>
      </xsl:choose>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>
  
  <xsl:template match="//dl[contains(@class, 'meal')][@data-type='Beer']/dd[1]">
    <xsl:copy>
      <span class="fas fa-beer">i</span>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>