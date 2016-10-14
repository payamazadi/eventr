using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace eventr
{
    public static class DocumentDBRepository
	{
		private static string databaseLink;
		private static Database database;
		private static DocumentClient _client;

		private static DocumentClient Client
		{
			get
			{
				if (_client == null)
				{
					string endpoint = ConfigurationManager.AppSettings["endpoint"];
					string authKey = ConfigurationManager.AppSettings["authKey"];
					Uri endpointUri = new Uri(endpoint);
					_client = new DocumentClient(endpointUri, authKey);
				}
				return _client;
			}
		}

		public static async Task<Document> testAdd()
		{
			var eventToAdd = new Models.Event
			{
				Name = "wtf",
				Description = "poop"
			};

			return await Client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri("eventr", "events"), eventToAdd);
		}

		public static async Task<Models.Event> testGet()
		{
			return Client.CreateDocumentQuery<Models.Event>(UriFactory.CreateDocumentCollectionUri("eventr", "events")).Where(f => f.Id == "8f6d23cb-626c-42a4-a3ed-896067441b1b").AsEnumerable().First();
		}
	}
}