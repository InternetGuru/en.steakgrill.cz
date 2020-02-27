<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <!-- menu-nested on HP -->
  <xsl:template match="div[@class='part menu']/div">
    <xsl:copy>
      <div class="part menu-nested">
        <div>
          <xsl:apply-templates select="*[not(contains(@class, 'section'))]"/>
        </div>
      </div>
      <xsl:apply-templates select="div[contains(@class, 'section')]"/>
    </xsl:copy>
  </xsl:template>
    
  <xsl:template match="div[contains(@class, 'menu')]/div/div[contains(@class, 'section')]">
    <xsl:apply-templates/>
  </xsl:template>
  
  <!-- IMG -->
  <!-- soups, salads, grilled_steaks -->
  <xsl:template match="div[contains(@class, 'soups') or contains(@class, 'salads') or contains(@class, 'grilled_steaks') or contains(@class, 'concept')]/div">
    <xsl:copy>
      <xsl:attribute name="class">content-img</xsl:attribute>
      <div>
        <xsl:apply-templates select="*[not(contains(@class, 'list'))]"/>
      </div>
      <xsl:apply-templates select="div[contains(@class, 'list')]"/>
    </xsl:copy>
  </xsl:template>
  
  <!-- CARD -->
  <!-- daily_offer, weekend_events -->
  <!-- frying_pan_wok, desserts, side_dishes, condiments_and_sauces on regular_menu -->
  <!-- steaks on about_us -->
  <xsl:template match="div[contains(@class, 'frying_pan_wok') or contains(@class, 'daily_offer') or contains(@class, 'weekend_events') or contains(@class, 'desserts') or contains(@class, 'side_dishes') or contains(@class, 'condiments_and_sauces') or contains(@class, 'part steaks')]/div">
    <xsl:copy>
      <xsl:attribute name="class">content-card</xsl:attribute>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>
  <!-- beer -->
  <xsl:template match="div[contains(@class, 'beer')]/div">
    <xsl:copy>
      <xsl:attribute name="class">content-card</xsl:attribute>
      <xsl:attribute name="data-visibility">/nabidka</xsl:attribute>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>
  <!-- all parts on beverages and wine_list -->
  <xsl:template match="div[contains(@class, 'part')]/div[ancestor::body[@data-link='/beverages' or @data-link='/wine_list'] or ancestor::body[@data-link='/napojovy_listek' or @data-link='/vinny_listek']]">
    <xsl:copy>
      <xsl:attribute name="class">content-card</xsl:attribute>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>
  
  <!-- GROUP -->
  <!-- daily_offer, weekend_events, pivo -->
  <xsl:template match="div[contains(@class, 'daily_offer')][ancestor::body[@data-link='/menu'] or ancestor::body[@data-link='/nabidka']]">
    <xsl:text disable-output-escaping="yes">&lt;div class="part content-group daily_any_weekend"&gt;&lt;div&gt;</xsl:text>
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="div[contains(@class, 'weekend_events')][ancestor::body[@data-link='/menu'] or ancestor::body[@data-link='/nabidka']]">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
    <xsl:text disable-output-escaping="yes">&lt;/div&gt;&lt;/div&gt;</xsl:text>
  </xsl:template>
  <!-- group kids_dishes, condiments_and_sauces -->
  <xsl:template match="div[contains(@class, 'side_dishes')]">
    <xsl:text disable-output-escaping="yes">&lt;div class="part content-group side_and_sauces"&gt;&lt;div&gt;</xsl:text>
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="div[contains(@class, 'condiments_and_sauces')]">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
    <xsl:text disable-output-escaping="yes">&lt;/div&gt;&lt;/div&gt;</xsl:text>
  </xsl:template>
  
  <!-- SPLIT -->
  <!-- desserts -->
  <xsl:template match="div[contains(@class, 'desserts')]">
    <div class="part content-group desserts-group">
      <div>
        <xsl:copy>
          <xsl:apply-templates select="node()|@*"/>
        </xsl:copy>
        <div class="part desserts2">
          <div class="content-card">
            <div class="list multiple"><div>
             <xsl:copy-of select=".//dl[contains(@class, 'meal')][position() > 2]"/>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </xsl:template>
  <xsl:template match="div[contains(@class, 'desserts')]//dl[contains(@class, 'meal')][position() > 2]"/>
  
  <!-- NAVIGATION -->
  <!-- beverages, wine_list, regular_menu -->
  <xsl:template match="div[@class='contenttoc section'][ancestor::body[@data-link='/regular_menu'] or ancestor::body[@data-link='/wine_list'] or ancestor::body[@data-link='/beverages']]">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
      <ul class="button-list">
        <li><a class="nowarning button button-img" href="/regular_menu"><span class="fas fa-3x fa-clipboard-list">i</span>Regular Menu</a></li>
        <li><a class="nowarning button button-img" href="/beverages"><span class="fas fa-3x fa-mug-hot">i</span>Beverages</a></li>
        <li><a class="nowarning button button-img" href="/wine_list"><span class="fas fa-3x fa-wine-glass-alt">i</span>Wine List</a></li>
      </ul>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="div[@class='contenttoc section'][ancestor::body[@data-link='/stala_nabidka'] or ancestor::body[@data-link='/vinny_listek'] or ancestor::body[@data-link='/napojovy_listek']]">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
      <ul class="button-list">
        <li><a class="nowarning button button-img" href="/stala_nabidka"><span class="fas fa-3x fa-clipboard-list">i</span>Stálá nabídka jídel</a></li>
        <li><a class="nowarning button button-img" href="/napojovy_listek"><span class="fas fa-3x fa-wine-glass-alt">i</span>Nápojový lístek</a></li>
        <li><a class="nowarning button button-img" href="/vinny_listek"><span class="fas fa-3x fa-mug-hot">i</span>Vinný lístek</a></li>
      </ul>
    </xsl:copy>
  </xsl:template>
  
  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
