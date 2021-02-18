<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:param name="inputvar-hlavicka-akce" select="''"/>
  
  <xsl:template match="//p[preceding-sibling::h1[1][contains(@id, 'steakgrill')]]">
    <xsl:copy-of select="."/>
    <ul class="button-list">
      <xsl:if test="$inputvar-hlavicka-akce">
        <li><xsl:value-of disable-output-escaping="yes" select="$inputvar-hlavicka-akce"/></li>
      </xsl:if>
<!--       <li><a class="button button-img" href="#denni_nabidka"><span class="fas fa-3x fa-utensils">i</span>Denní nabídka</a></li> -->
      <li><a class="button button-img" href="#fastfood"><span class="fas fa-3x fa-burger-soda">i</span>Fast Food<br/>COVID</a></li>
      <li><a class="button button-img" href="#regular_menu_covid"><span class="fas fa-3x fa-clipboard-list">i</span>Regular menu<br/>COVID</a></li>
      <li><a class="button button-img" href="#regular_menu"><span class="fas fa-3x fa-clipboard-list">i</span>Regular menu</a></li>
      <li><a class="button button-img" href="https://www.google.cz/maps/place/STEAKGRILL/@50.389696,14.225149,15z/data=!4m5!3m4!1s0x0:0x3b8b2745f392b1bb!8m2!3d50.389696!4d14.225149?sa=X&amp;ved=0ahUKEwjuwdqnv6TUAhWBmhQKHWYwC7QQ_BIIdTAK&amp;shorturl=1&amp;dg=dbrw&amp;newdg=1"><span class="fas fa-3x fa-map-marker-alt">i</span>Where to Find Us</a></li>
      <li><a class="button button-img" href="https://www.facebook.com/Steakgrill/"><span class="fab fa-3x fa-facebook">i</span>Our Facebook</a></li>
    </ul>
  </xsl:template>
  
  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
