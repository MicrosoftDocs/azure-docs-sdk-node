---
layout: HubPage
hide_bc: true
title: Node.js Dev Center | Microsoft Docs
description: Learn how to develop and deploy Node.js applications in the cloud with Azure.
ms.topic: hub-page
---


<div id="main" class="v2">
	<div class="container">
		<h1 style="text-align: center">Node.js Dev Center</h1> 
		<p style="text-align: center">Build, deploy, and scale your Node.js applications on the Azure cloud.</p>

		<ul class="cardsM cols cols2">
			<li style="
					flex-basis: 180px;
					text-align: center;
					background-color: black;
					font: white;
					display: block;
					margin-left: auto;
					margin-top: 15px;
					margin-bottom: 25px;
					margin-right: 10px;

				">
				<a class="card" href="https://azure.microsoft.com/en-us/try/app-service/web/?language=nodejs">
					<br>
						<div class="cardText">
						<h3 style="
							color: white;
							font-size: large;
						">Get started free &gt;</h3>
					</div>
				</a>
			</li>

			<li style="
					flex-basis: 180px;
					text-align: center;
					background-color: white;
					display: block;
					margin-right: auto;
					margin-top: 15px;
					margin-bottom: 25px;
					margin-left: 10px;
				">
				<a class="card" href="https://code.visualstudio.com/docs/nodejs/nodejs-deployment">
					<br>
						<div class="cardText">
						<h3 style="
							color: black;
							font-size: large;
						">Documentation</h3>
					</div>
				</a>
			</li>
		</ul>
		<img src="media/azure-cli-output.png" style="
			display: block;
			margin: auto;
			border-radius: 7px;
			width: 650px
		">

		<h2 style="margin-top: 50px">Get started fast</h2>
		<ul class="cardsM cols cols3">
			<li>
				<a class="card" href="https://code.visualstudio.com/tutorials/static-website/getting-started">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/azure/media/index/webapp.svg">
					<div class="cardText">
						<h3>Static site hosting</h3>
						<p>Host your SPA with Azure Storage</p>
					</div>
				</a>
			</li>
			<li>
				<a class="card" href="https://code.visualstudio.com/tutorials/app-service-extension/getting-started">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/media/logos/logo_vs-code.svg">
					<div class="cardText">
						<h3>Full stack hosting</h3>
						<p>Deploy Express apps with App Service</p>
					</div>
				</a>
			</li>
			<li>
				<a class="card" href="https://code.visualstudio.com/tutorials/docker-extension/getting-started">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/azure/media/index/ContainerInstances.svg">
					<div class="cardText">
						<h3>Container app hosting</h3>
						<p>Build and deploy Node microservices on Azure</p>
					</div>
				</a>
			</li>
			<li>
				<a class="card" href="https://code.visualstudio.com/tutorials/functions-extension/getting-started">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/azure/media/index/azurefunctions.svg">
					<div class="cardText">
						<h3>Serverless apps and APIs</h3>
						<p>Use Azure functions to go serverless</p>
					</div>
				</a>
			</li>
			<li>
				<a class="card" href="https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/azure/media/index/IOT_edge_50.svg">
					<div class="cardText">
						<h3>Connect and manage IoT devices</h3>
						<p>Use Azure IoT Hub to manage thousands of devices</p>
					</div>
				</a>
			</li>
			<li>
				<a class="card" href="https://docs.microsoft.com/en-us/vsts/build-release/apps/cd/azure/azure-devops-project-nodejs?toc=%2Fvsts%2Fdeploy-azure%2Ftoc.json&bc=%2Fvsts%2Fdeploy-azure%2Fbreadcrumb%2Ftoc.json&view=vsts">
					<img class="cardImage" role="presentation" alt="" src="https://docs.microsoft.com/media/logos/logo_vs-team-services.svg">
					<div class="cardText">
						<h3>Add CI/CD</h3>
						<p>Use CI/CD to automate your deployments</p>
					</div>
				</a>
			</li>
		</ul>

		<hr style="margin-top:80px; margin-bottom:50px;">

		<h2 style="text-align: left;">npm modules for every job</h2>
		
		<ul class="pivots">
			<li>
				<a href="#storage">Upload files to storage</a>
				<ul id="storage">
					<li>
						<a href="#storage1"></a>
						<div id="storage1">
							<div>
								<h3>Upload files to Azure Storage </h3>
								<h4>1. Download the Azure CLI (on Windows <a href="https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"> get the MSI</a>) and login.</h4> 
								<div class="codeHeader" data-bi-name="code-header"><span class="language">bash</span>
								</div>
								<pre><code class="lang-bash">
brew install azure-cli
az login 
az group create --name MyResourceGroup --location &quot;West US&quot;
								</code></pre>
			
								<h4>2. Create a storage container.</h4> 
								<div class="codeHeader" data-bi-name="code-header"><span class="language">bash</span>
								</div>
								<pre><code class="lang-bash">
az storage account create -n mystorageaccount12312 -g MyResourceGroup -l westus --sku Standard_LRS
az storage account keys list -n mystorageaccount12312 -g MyResourceGroup --output table
az storage container create --name my-container --public-access blob --account-name mystorageaccount12312 --account-key &lt;account-key-from-step-4&gt;
								</code></pre>
			
								<h4>3. Upload files using the Azure storage npm package.</h4> 
								<div class="tabGroup" id="tabgroup_ErXr5hkbUU" data-bi-name="tab-group">
									<!-- <ul role="tablist">
										<li role="presentation">
										<a href="#tabpanel_ErXr5hkbUU_javascript" role="tab" aria-controls="tabpanel_ErXr5hkbUU_javascript" data-tab="javascript" tabindex="0" aria-selected="true" data-bi-name="tab">JavaScript</a>
										</li>
										<li role="presentation">
											<a href="#tabpanel_ErXr5hkbUU_typescript" role="tab" aria-controls="tabpanel_ErXr5hkbUU_typescript" data-tab="typescript" tabindex="-1" data-bi-name="tab" aria-selected="false">TypeScript</a>
										</li>
									</ul> -->
									<section id="tabpanel_ErXr5hkbUU_javascript" role="tabpanel" data-tab="javascript">
										<div class="codeHeader" data-bi-name="code-header"><span class="language">JavaScript</span>
										</div>
										<pre><code class="lang-js">
<span class="hljs-keyword">let</span> storage = <span class="hljs-built_in">require</span>(<span class="hljs-string">'azure-storage'</span>);
<span class="hljs-keyword">let</span> util = <span class="hljs-built_in">require</span>(<span class="hljs-string">'util'</span>);

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">main</span>(<span class="hljs-params"></span>) </span>{
	<span class="hljs-keyword">const</span> containerName = <span class="hljs-string">"my-container"</span>; 
	<span class="hljs-keyword">const</span> blobService = storage.createBlobService(<span class="hljs-string">"mystorageaccount1231"</span>, ACCOUNT_KEY); 

	blobService.createBlockBlobFromLocalFile = util.promisify(blobService.createBlockBlobFromLocalFile); 
	blobService.listBlobsSegmented = util.promisify(blobService.listBlobsSegmented); 

	<span class="hljs-keyword">const</span> uploadResult = <span class="hljs-keyword">await</span> blobService.createBlockBlobFromLocalFile(containerName, <span class="hljs-string">"myFile.txt"</span>, <span class="hljs-string">"&lt;FULL_FILE_PATH&gt;"</span>); 
	<span class="hljs-keyword">const</span> listResult = <span class="hljs-keyword">await</span> blobService.listBlobsSegmented(containerName, <span class="hljs-literal">null</span>);
}
main();                                 
										</code></pre>
									</section>
									<section id="tabpanel_ErXr5hkbUU_typescript" role="tabpanel" data-tab="typescript" hidden="hidden" aria-hidden="true">
										<div class="codeHeader" data-bi-name="code-header">
											<span class="language">TypeScript</span>
											</div>
											<pre><code class="lang-TypeScript">
<span class="hljs-keyword">import</span> { promisify } <span class="hljs-keyword">from</span> <span class="hljs-string">'bluebird'</span>;
<span class="hljs-keyword">import</span> { createBlobService, BlobService, common } <span class="hljs-keyword">from</span> <span class="hljs-string">'azure-storage'</span>;

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">main</span>(<span class="hljs-params"></span>) </span>{
	<span class="hljs-keyword">const</span> containerName = <span class="hljs-string">"my-container"</span>; 
	<span class="hljs-keyword">const</span> blobService = createBlobService(<span class="hljs-string">"mystorageaccount1231"</span>, ACCOUNT_KEY); 

	<span class="hljs-keyword">const</span> createBlockBlobFromLocalFileAsync = promisify(blobService.createBlockBlobFromLocalFile, {context: blobService});
	<span class="hljs-keyword">const</span> listBlobsSegmentedAsync = promisify(blobService.listBlobsSegmented, {context: blobService});

	<span class="hljs-keyword">const</span> uploadResult = <span class="hljs-keyword">await</span> createBlockBlobFromLocalFileAsync(containerName, <span class="hljs-string">"myFile.txt"</span>, <span class="hljs-string">"&lt;FULL_FILE_PATH&gt;"</span>);
	<span class="hljs-keyword">const</span> listResult = <span class="hljs-keyword">await</span> listBlobsSegmentedAsync(containerName, <span class="hljs-literal">null</span>);
}
main();                             
											</code></pre>
									</section>
								</div>
							</div>
						</div>
					</li>
				</ul>	
			</li>

			<li>
				<a href="#cogs">Sentiment analysis</a>
				<ul id="cogs">
					<li>
						<a href="#cogs1">Text Analytics</a>
						<div id="cogs1" style="display: block">
							<div>

								<h3>Get sentiment on any language. </h3>
								<h4>1. Download the Azure CLI (on Windows <a href="https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"> get the MSI</a>) and login.</h4> 
								<div class="codeHeader" data-bi-name="code-header"><span class="language">bash</span>
								</div>
								<pre><code class="lang-bash">
brew install azure-cli
az login 
az group create --name MyResourceGroup --location &quot;West US&quot;
								</code></pre>
			
								<h4>2. Create a cognitive services text analytics account and retrieve your account key.</h4> 
								<div class="codeHeader" data-bi-name="code-header"><span class="language">bash</span>
								</div>
								<pre><code class="lang-bash">
az cognitiveservices account create -n cogstest -g MyResourceGroup --sku S0 --kind TextAnalytics -l westcentralus
az cognitiveservices account keys list -g MyResourceGroup -n cogstest
								</code></pre>
			
								<h4>3. Use the cognitive services API using your account key.</h4> 
								<div class="tabGroup" id="tabgroup_ErXr5hkbUU" data-bi-name="tab-group">
									<!-- <ul role="tablist">
										<li role="presentation">
											<a href="#tabpanel_ErXr5hkbUU_javascript" role="tab" aria-controls="tabpanel_ErXr5hkbUU_javascript" data-tab="javascript" tabindex="0" aria-selected="true" data-bi-name="tab">JavaScript</a>
										</li>
										<li role="presentation">
											<a href="#tabpanel_ErXr5hkbUU_typescript" role="tab" aria-controls="tabpanel_ErXr5hkbUU_typescript" data-tab="typescript" tabindex="-1" data-bi-name="tab" aria-selected="false">TypeScript</a>
										</li>
									</ul> -->
									<section id="tabpanel_ErXr5hkbUU_javascript" role="tabpanel" data-tab="javascript">
										<div class="codeHeader" data-bi-name="code-header"><span class="language">JavaScript</span>
										</div>
										<pre><code class="lang-js">
<span class="hljs-keyword">let</span> https = <span class="hljs-built_in">require</span>(<span class="hljs-string">"https"</span>);

<span class="hljs-keyword">let</span> request_params = {
	<span class="hljs-attr">method</span>: <span class="hljs-string">"POST"</span>,
	<span class="hljs-attr">hostname</span>: <span class="hljs-string">"westcentralus.api.cognitive.microsoft.com"</span>,
	<span class="hljs-attr">path</span>: <span class="hljs-string">"/text/analytics/v2.0/sentiment"</span>,
	<span class="hljs-attr">headers</span>: {
		<span class="hljs-string">"Ocp-Apim-Subscription-Key"</span>: ACCOUNT_KEY,
	}
};

<span class="hljs-keyword">let</span> getTextAnalytics = https.request(request_params, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">response</span>) </span>{
	<span class="hljs-keyword">let</span> body = <span class="hljs-string">""</span>;
	response.on(<span class="hljs-string">"data"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">d</span>) </span>{
		body += d;
	});
	response.on(<span class="hljs-string">"end"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
		<span class="hljs-keyword">let</span> body_ = <span class="hljs-built_in">JSON</span>.parse(body);
		<span class="hljs-keyword">let</span> body__ = <span class="hljs-built_in">JSON</span>.stringify(body_, <span class="hljs-literal">null</span>, <span class="hljs-string">"  "</span>);
		<span class="hljs-built_in">console</span>.log(body__);
	});
	response.on(<span class="hljs-string">"error"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) </span>{
		<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Error: "</span> + e.message);
	});
});

<span class="hljs-keyword">let</span> body = <span class="hljs-built_in">JSON</span>.stringify({
	<span class="hljs-string">"documents"</span>: [
		{ <span class="hljs-string">"id"</span>: <span class="hljs-string">"1"</span>, <span class="hljs-string">"language"</span>: <span class="hljs-string">"en"</span>, <span class="hljs-string">"text"</span>: <span class="hljs-string">"Node.js and Azure are awesome!"</span> },
		{ <span class="hljs-string">"id"</span>: <span class="hljs-string">"2"</span>, <span class="hljs-string">"language"</span>: <span class="hljs-string">"es"</span>, <span class="hljs-string">"text"</span>: <span class="hljs-string">"Este ha sido un dia terrible."</span> },
	]
});

getTextAnalytics.write(body);
getTextAnalytics.end();          
										</code></pre>
									</section>
									<section id="tabpanel_ErXr5hkbUU_typescript" role="tabpanel" data-tab="typescript" hidden="hidden" aria-hidden="true">
										<div class="codeHeader" data-bi-name="code-header">
											<span class="language">TypeScript</span>
											</div>
											<pre><code class="lang-TypeScript">
// TODO                             
											</code></pre>
									</section>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>				
		
		<ul class="cardsM cols cols2">
			<li style="
					flex-basis: 180px;
					text-align: center;
					background-color: black;
					font: white;
					display: block;
					margin-left: auto;
					margin-top: 15px;
					margin-bottom: 25px;
					margin-right: 10px;
	
				">
				<a class="card" href="https://azure.microsoft.com/en-us/try/app-service/web/?language=nodejs">
					<br>
						<div class="cardText">
						<h3 style="
							color: white;
							font-size: large;
						">Get started free &gt;</h3>
					</div>
				</a>
			</li>
	
			<li style="
					flex-basis: 180px;
					text-align: center;
					background-color: white;
					display: block;
					margin-right: auto;
					margin-top: 15px;
					margin-bottom: 25px;
					margin-left: 10px;
				">
				<a class="card" href="https://docs.microsoft.com/en-us/javascript/api/overview/azure/?view=azure-node-latest">
					<br>
						<div class="cardText">
						<h3 style="
							color: black;
							font-size: large;
						">API Reference</h3>
					</div>
				</a>
			</li>
		</ul>
	</div>

</div>
